//%weight=106 color="#8B008B" icon="\uF610"
namespace LCD12846 {
    let LCD12864_CS = DigitalPin.P13;
    let LCD12864_SID = DigitalPin.P14;
    let LCD12864_SCK = DigitalPin.P15;
    let addr_table = [0x80, 0x81, 0x82, 0x83, 0x84, 0x85, 0x86, 0x87,
        0x90, 0x91, 0x92, 0x93, 0x94, 0x95, 0x96, 0x97,
        0x88, 0x89, 0x8a, 0x8b, 0x8c, 0x8d, 0x8e, 0x8f,
        0x98, 0x99, 0x9a, 0x9b, 0x9c, 0x9d, 0x9e, 0x9f];

    /*********选择引脚号（默认CS是13号引脚，SID是14号引脚，SCK是15号引脚）********/
    //%blockId=LCD12864_pins_Actuator block="设置LCD12864引脚 4号引脚 %pin1|5号引脚 %pin2|6号引脚 %pin3"
    //%weight=100 blockGap=10 color="#87CEEB"
    export function LCD12864_init(pin1: DigitalPin, pin2: DigitalPin, pin3: DigitalPin): void {
        LCD12864_CS = pin1;
        LCD12864_SID = pin2;
        LCD12864_SCK = pin3;
    }

    //发送一个字节的数据
    function LCD12864_sendByte(dat: number): void {
        for (let i = 0; i < 8; i++) {
            LCD12864_SCK = 0;
            if (dat & 0x80) {
                LCD12864_SID = 1;
            } else {
                LCD12864_SID = 0;
            }
            dat = dat << 1;
            LCD12864_SCK = 1;
            LCD12864_SCK = 0;
        }
    }

    //接收一个字节的数据
    function LCD12864_receiveByte(): number {
        let temp1 = 0;
        let temp2 = 0;
        for (let i = 0; i < 8; i++) {
            temp1 = temp1 << 1;
            LCD12864_SCK = 0;
            LCD12864_SCK = 1;
            LCD12864_SCK = 0;
            if (LCD12864_SID) {
                temp1++;
            }
        }
        for (let i = 0; i < 8; i++) {
            temp2 = temp2 << 1;
            LCD12864_SCK = 0;
            LCD12864_SCK = 1;
            LCD12864_SCK = 0;
            if (LCD12864_SID) {
                temp2++;
            }
        }
        return ((0xf0 & temp1) + (0x0f & temp2));
    }

    //判忙
    function LCD12864_checkBusy(): void {
        do LCD12864_sendByte(0xfc);
        while (0x80 & LCD12864_receiveByte());
    }

    //写命令
    function LCD12864_writeCommand(cmd: number): void {
        LCD12864_CS = 1;
        LCD12864_checkBusy();
        LCD12864_sendByte(0xf8);
        LCD12864_sendByte(0xf0 & cmd);
        LCD12864_sendByte(0xf0 & (cmd << 4));
        LCD12864_CS = 0;
    }

    //写数据
    function LCD12864_writeData(data: number): void {
        LCD12864_CS = 1;
        LCD12864_checkBusy();
        LCD12864_sendByte(0xfa);
        LCD12864_sendByte(0xf0 & data);
        LCD12864_sendByte(0xf0 & (data << 4));
        LCD12864_CS = 0;
    }

    //读数据
    function LCD12864_readData(): number {
        LCD12864_checkBusy();
        LCD12864_sendByte(0xfe);
        return LCD12864_receiveByte();
    }

    //初始化显示屏
    function LCD12864_lcmInit(): void {
        LCD12864_writeCommand(0x30);
        LCD12864_writeCommand(0x03);
        LCD12864_writeCommand(0x0c);
        LCD12864_writeCommand(0x01);
        LCD12864_writeCommand(0x06);
    }

    /*********清屏********/
    //%blockId=LCD12864_lcmClear block="清除所有显示内容"
    //%weight=96 blockGap=10 color="#87CEEB"
    export function LCD12864_lcmClear(): void {
        LCD12864_writeCommand(0x30);
        LCD12864_writeCommand(0x80);
        for (let i = 0; i < 64; i++) {
            LCD12864_writeData(0x20);
        }
    }

    /*********指定位置显示汉字********/
    //%blockId=LCD12864_showString_en block="行 %row|列 %col|内容%Str"
    //%weight=92 blockGap=10 color="#87CEEB"
    export function LCD12864_showString_en(row: number, col: number, Str: string): void {
        basic.pause(100);
        LCD12864_lcmInit();
        LCD12864_writeCommand(0x30);
        LCD12864_writeCommand(addr_table[(row - 1) * 8 + (col - 1)]);
        for (let i = 0; i < Str.length; i++) {
            if (col == 9) {
                col = 1;
                row++;
            }
            if (row == 5) {
                row = 1;
            }
            LCD12864_writeCommand(addr_table[(row - 1) * 8 + (col - 1)]);
            LCD12864_writeData(Str.charCodeAt(i));
            col++;
        }
    }
}
