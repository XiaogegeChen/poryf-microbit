
//% color="#808080" weight=23 icon="\uf11c"
namespace pbit_传感器 {
    
    
 /*单色灯亮灭*/
    export enum enLED1 { 
        //% blockId="OFF" block="灭"
        OFF = 0,
        //% blockId="ON" block="亮"
        ON =1
    }
    //% blockId=mbit_LED1 block="LED灯 管脚 %pin|状态 %value"
    //% weight=5
    //% blockGap=8
    //% color="#C814B8"
    export function LED1(pin: DigitalPin, value: enLED1): void {
        pins.digitalWritePin(pin, value);
    }
    
    
   /*单色灯亮度调节*/ 
   //% blockId=mbit_LED2 block="LED灯 管脚 %pin|亮度（0~255） %value"
    //% weight=4
    //% blockGap=8
    //% color="#C814B8"
    //% value.min=0 value.max=255
    export function LED2(pin: AnalogPin, value: number): void {
        pins.analogWritePin(pin, value * 1024 / 256);
    } 
    
    
    /*按键*/ 
    export enum enButton {
        //% blockId="Press" block="按下"
        Press = 0,
        //% blockId="Realse" block="松开"
        Realse = 1
    }
    //% blockId=mbit_Button block="按键 管脚 %pin|状态 %value"
    //% weight=4
    //% blockGap=8
    //% color="#C814B8"
    export function Button(pin: DigitalPin, value: enButton): boolean {
        pins.setPull(pin, PinPullMode.PullUp);
        if (pins.digitalReadPin(pin) == value) {
            return true;
        }
        else {
            return false;
        }
    } 
    
    
    /*火焰传感器*/
       export enum enFire {
        //% blockId="Fire" block="有火焰"
        Voice = 0,
        //% blockId="NoFire" block="无火焰"
        NoVoice = 1
    //% blockId=mbit_Fire_Sensor block="火焰传感器 管脚 %pin|状态 %value"
    //% weight=4
    //% blockGap=8
    //% color="#C814B8"
           export function Fire_Sensor(pin: DigitalPin, value: enFire): boolean {
        pins.setPull(pin, PinPullMode.PullUp);
        if (pins.digitalReadPin(pin) == value) {
            return true;
        }
        else {
            return false;
        }
    }
           
           
           
