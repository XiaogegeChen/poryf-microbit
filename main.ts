
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
        Fire = 0,
        //% blockId="NoFire" block="无火焰"
        NoFire = 1
           }
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
           
           
      /*水滴传感器*/
       export enum enWater {
        //% blockId="NoWater" block="无水滴"
        NoWater = 0,
        //% blockId="Water" block="有水滴"
        Watere = 1
           }
    //% blockId=mbit_Water_Sensor block="水滴传感器 管脚 %pin|状态 %value"
    //% weight=4
    //% blockGap=8
    //% color="#C814B8"
           export function Water_Sensor(pin: DigitalPin, value: enWater): boolean {
        pins.setPull(pin, PinPullMode.PullUp);
        if (pins.digitalReadPin(pin) == value) {
            return true;
        }
        else {
            return false;
        }
    } 
           
           
     /*磁感应传感器*/
       export enum enMagnet {
        //% blockId="Magnet" block="有磁铁"
        Magnet = 0,
        //% blockId="NoMagnet" block="无磁铁"
        NoMagnet = 1
           }
    //% blockId=mbit_Magnet_Sensor block="磁感应传感器 管脚 %pin|状态 %value"
    //% weight=4
    //% blockGap=8
    //% color="#C814B8"
           export function Magnet_Sensor(pin: DigitalPin, value: enMagnet): boolean {
        pins.setPull(pin, PinPullMode.PullUp);
        if (pins.digitalReadPin(pin) == value) {
            return true;
        }
        else {
            return false;
        }
    } 
           
           
      /*人体红外传感器*/
       export enum enHumanInfrared {
        //% blockId="HumanInfrared" block="有人"
        HumanInfrared = 1,
        //% blockId="NoHumanInfrared" block="无人"
        NoHumanInfrared = 0
           }
    //% blockId=mbit_HumanInfrared_Sensor block="磁感应传感器 管脚 %pin|状态 %value"
    //% weight=4
    //% blockGap=8
    //% color="#C814B8"
           export function HumanInfrared_Sensor(pin: DigitalPin, value: enHumanInfrared): boolean {
        pins.setPull(pin, PinPullMode.PullUp);
        if (pins.digitalReadPin(pin) == value) {
            return true;
        }
        else {
            return false;
        }
    } 
           
           
     /*红外循迹传感器*/
       export enum enInfraredTracking {
        //% blockId="InfraredTracking" block="检测到黑色"
        InfraredTracking = 0,
        //% blockId="NoInfraredTracking" block="未检测到黑色"
        NoInfraredTracking = 1
           }
    //% blockId=mbit_InfraredTracking_Sensor block="磁感应传感器 管脚 %pin|状态 %value"
    //% weight=4
    //% blockGap=8
    //% color="#C814B8"
           export function InfraredTracking_Sensor(pin: DigitalPin, value: enInfraredTracking): boolean {
        pins.setPull(pin, PinPullMode.PullUp);
        if (pins.digitalReadPin(pin) == value) {
            return true;
        }
        else {
            return false;
        }
    } 
           
           
   /*旋转电位器*/ 
    //% blockId=mbit_RotaryPotentiometer block="旋转电位器 管脚 %Pin"
    //% weight=4
    //% blockGap=8
    //% color="#C814B8"
    export function RotaryPotentiometer(pin:AnalogPin): number {

        // send pulse
        pins.setPull(Trig, PinPullMode.PullNone);
        pins.digitalWritePin(Trig, 0);
        control.waitMicros(2);
        pins.digitalWritePin(Trig, 1);
        control.waitMicros(15);
        pins.digitalWritePin(Trig, 0);

        // read pulse
        let d = pins.pulseIn(Echo, PulseValue.High, 23200);
        return d / 58;
    }
