
//% color="#808080" weight=23 icon="\uf11c"
namespace pbit_传感器 {
    
    
 
    export enum enLED1 { 
        //% blockId="OFF" block="灭"
        OFF = 0,
        //% blockId="ON" block="亮"
        ON =1
    }
    
    export enum enButton {
        //% blockId="Press" block="按下"
        Press = 0,
        //% blockId="Realse" block="松开"
        Realse = 1
    }
    
    export enum enFire {
        //% blockId="Fire" block="有火焰"
        Fire = 0,
        //% blockId="NoFire" block="无火焰"
        NoFire = 1
           }
    
     export enum enWater {
        //% blockId="NoWater" block="无水滴"
        NoWater = 0,
        //% blockId="Water" block="有水滴"
        Watere = 1
           }
    
    export enum enMagnet {
        //% blockId="Magnet" block="有磁铁"
        Magnet = 0,
        //% blockId="NoMagnet" block="无磁铁"
        NoMagnet = 1
           }
    
    export enum enHumanInfrared {
        //% blockId="HumanInfrared" block="有人"
        HumanInfrared = 1,
        //% blockId="NoHumanInfrared" block="无人"
        NoHumanInfrared = 0
           }
    
    export enum enInfraredTracking {
        //% blockId="InfraredTracking" block="检测到黑色"
        InfraredTracking = 1,
        //% blockId="NoInfraredTracking" block="未检测到黑色"
        NoInfraredTracking = 0
           }
    
    export enum enVoice {
        //% blockId="Voice" block="有声音"
        Voice = 0,
        //% blockId="NoVoice" block="无声音"
        NoVoice= 1
           }
    
    export enum enInfraredObstacleAvoidance {
        //% blockId="InfraredObstacleAvoidance" block="检测到障碍物"
        InfraredObstacleAvoidance = 0,
        //% blockId="NoInfraredObstacleAvoidance" block="未检测到障碍物"
        NoInfraredObstacleAvoidance = 1
           }
    
      export enum enCollision {
        //% blockId="Collision" block="被撞击"
        Collision = 0,
        //% blockId="NoCollision" block="未被撞击"
        NoCollision = 1
           }
    
     export enum enTouch {
        //% blockId="Touch" block="触摸"
        Touch = 0,
        //% blockId="NoTouch" block="未触摸"
        NoTouch = 1
           }
    
    export enum enRocker {
        //% blockId="Nostate" block="无"
        Nostate = 0,
        //% blockId="Up" block="上"
        Up = 1,
        //% blockId="Down" block="下"
        Down = 2,
        //% blockId="Left" block="左"
        Left = 3,
        //% blockId="Right" block="右"
        Right = 4,
        //% blockId="Press" block="按下"
        Press = 5
    }
    
     export enum enInfraredReception {
        //% blockId="InfraredReception" block="接收到红外信号"
        InfraredReception = 1,
        //% blockId="NoInfraredReception" block="未接收到红外信号"
        NoInfraredReception = 0
           }
    
    export enum enShock {
        //% blockId="Shock" block="震动"
        Shock = 1,
        //% blockId="NoShock" block="未震动"
        NoShock = 0
           }
    
    
    /*单色灯亮灭*/
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
    //% blockId=mbit_Water_Sensor block="水滴传感器 管脚 %pin|状态 %value"
    //% weight=4
    //% blockGap=8
    //% color="#C814B8"
           export function Water_Sensor(pin: AnalogPin, value: enWater): boolean {
               let WaterState=0;
        if (pins.analogReadPin(pin) > 200) {
            WaterState=1;
        }
        else {
            WaterState=0;
        }
         if(WaterState == value){
             return true;
         }else{
          return false;   
         }
    } 
           
           
     /*磁感应传感器*/
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
    //% blockId=mbit_HumanInfrared_Sensor block="人体红外传感器 管脚 %pin|状态 %value"
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
    //% blockId=mbit_InfraredTracking_Sensor block="红外循迹传感器 管脚 %pin|状态 %value"
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
    //% blockId=mbit_RotaryPotentiometer block="旋转电位器 管脚 %pin"
    //% weight=4
    //% blockGap=8
    //% color="#C814B8"
    export function RotaryPotentiometer(pin:AnalogPin): number {
        return pins.analogReadPin(pin);
    }
    
    
    /*声音传感器*/
    //% blockId=mbit_Voiced_Sensor block="声音传感器 管脚 %pin|状态 %value"
    //% weight=4
    //% blockGap=8
    //% color="#C814B8"
           export function Voice_Sensor(pin: DigitalPin, value: enVoice): boolean {
        pins.setPull(pin, PinPullMode.PullUp);
        if (pins.digitalReadPin(pin) == value) {
            return true;
        }
        else {
            return false;
        }
    } 
           
           
           
    /*光敏电阻*/ 
    //% blockId=mbit_PhotosensitiveResistance block="激光强度 管脚 %pin"
    //% weight=4
    //% blockGap=8
    //% color="#C814B8"
    export function PhotosensitiveResistance(pin:AnalogPin): number {
        return pins.analogReadPin(pin);
    }
    
    
    /*红外避障传感器*/
    //% blockId=mbit_InfraredObstacleAvoidance_Sensor block="红外避障传感器 管脚 %pin|状态 %value"
    //% weight=4
    //% blockGap=8
    //% color="#C814B8"
           export function InfraredObstacleAvoidance_Sensor(pin: DigitalPin, value: enInfraredObstacleAvoidance): boolean {
        pins.setPull(pin, PinPullMode.PullUp);
        if (pins.digitalReadPin(pin) == value) {
            return true;
        }
        else {
            return false;
        }
    }
           
           
   /*碰撞传感器*/
    //% blockId=mbit_Collision_Sensor block="碰撞传感器 管脚 %pin|状态 %value"
    //% weight=4
    //% blockGap=8
    //% color="#C814B8"
           export function Collision_Sensor(pin: DigitalPin, value: enCollision): boolean {
        pins.setPull(pin, PinPullMode.PullUp);
        if (pins.digitalReadPin(pin) == value) {
            return true;
        }
        else {
            return false;
        }
    }   
           
           
    /*触摸传感器*/
    //% blockId=mbit_Touch_Sensor block="触摸传感器 管脚 %pin|状态 %value"
    //% weight=4
    //% blockGap=8
    //% color="#C814B8"
           export function Touch_Sensor(pin: DigitalPin, value: enTouch): boolean {
        pins.setPull(pin, PinPullMode.PullUp);
        if (pins.digitalReadPin(pin) == value) {
            return true;
        }
        else {
            return false;
        }
    }  
           
           
   /*灰度传感器*/ 
    //% blockId=mbit_GrayLevel block="获取灰度值 管脚 %pin"
    //% weight=4
    //% blockGap=8
    //% color="#C814B8"
    export function GrayLevel(pin:AnalogPin): number {
        return pins.analogReadPin(pin);
    }  
    
   
    /*摇杆*/
    //% blockId=mbit_Rocker block="摇杆 X方向管脚（中间接口） %pin1|Y方向管脚（左侧接口） %pin2|Z方向管脚（右侧接口） %pin3|状态 %value"
    //% weight=4
    //% blockGap=8
    //% color="#C814B8"
    export function Rocker(pin1: AnalogPin, pin2: AnalogPin, pin3: DigitalPin, value: enRocker): boolean {

        pins.setPull(pin3, PinPullMode.PullUp);
        let x = pins.analogReadPin(pin1);
        let y = pins.analogReadPin(pin2);
        let z = pins.digitalReadPin(pin3);
        let now_state = 0;

        if (x < 100) 
        {

            now_state = 4;

        }
        else if (x > 700) 
        {

            now_state = 3;
        }
        else  
        {
            if (y < 100) 
            {
                now_state = 2;
            }
            else if (y > 700) 
            {
                now_state = 1;
            }
        }
        if (z == 0)
            now_state = 5;
        if (now_state == value)
            return true;
        else
            return false;

    }
    
    
    /*电压读取模块*/
    //% blockId=mbit_Voltage block="获取电压值（V） 管脚 %pin"
    //% weight=4
    //% blockGap=8
    //% color="#C814B8"
    export function Voltage(pin:AnalogPin): number {
        return pins.analogReadPin(pin)*33/10230;
    }  
    
    
     /*滑动变阻器*/ 
    //% blockId=mbit_SlipRheostat block="变阻器电阻模拟值 管脚 %pin"
    //% weight=4
    //% blockGap=8
    //% color="#C814B8"
    export function SlipRheostat(pin:AnalogPin): number {
        return pins.analogReadPin(pin);
    }
    
    
    /*开启继电器*/ 
    //% blockId=mbit_Relay_Sensor_Open block="开启继电器 管脚 %pin"
    //% weight=4
    //% blockGap=8
    //% color="#C814B8"
           export function Relay_Sensor_Open(pin: DigitalPin): void {
       pins.digitalWritePin(pin, 0);   
    } 
    
    
    /*关闭继电器*/ 
    //% blockId=mbit_Relay_Sensor_Close block="关闭继电器 管脚 %pin"
    //% weight=4
    //% blockGap=8
    //% color="#C814B8"
           export function Relay_Sensor_Close(pin: DigitalPin): void {
       pins.digitalWritePin(pin, 1);
    } 
    
    
    /*土壤湿度传感器*/ 
    //% blockId=mbit_SoilMoisture block="土壤湿度模拟值 管脚 %pin"
    //% weight=4
    //% blockGap=8
    //% color="#C814B8"
    export function SoilMoisture(pin:AnalogPin): number {
        return pins.analogReadPin(pin);
    }
    
    
    /*水位监测模块*/ 
    //% blockId=mbit_WaterLevel block="水位高度模拟值 管脚 %pin"
    //% weight=4
    //% blockGap=8
    //% color="#C814B8"
    export function WaterLevel(pin:AnalogPin): number {
        return pins.analogReadPin(pin);
    }
    
    
    /*LM35温度传感器*/ 
    //% blockId=mbit_LM35Temperature block="(LM35)温度值 管脚 %pin"
    //% weight=4
    //% blockGap=8
    //% color="#C814B8"
    export function LM35Temperature(pin:AnalogPin): number {
        return pins.analogReadPin(pin)*330/1024;
    }
    
    
    /*开启红外发射传感器*/ 
    //% blockId=mbit_InfraredEmission_Sensor_Open block="开启红外发射传感器 管脚 %pin"
    //% weight=4
    //% blockGap=8
    //% color="#C814B8"
           export function InfraredEmission_Sensor_Open(pin: DigitalPin): void {
       pins.digitalWritePin(pin, 1);   
    } 
    
    
    /*关闭红外发射传感器*/ 
    //% blockId=mbit_InfraredEmission_Sensor_Close block="关闭红外发射传感器 管脚 %pin"
    //% weight=4
    //% blockGap=8
    //% color="#C814B8"
           export function InfraredEmission_Sensor_Close(pin: DigitalPin): void {
       pins.digitalWritePin(pin, 0);
    } 
    
    
    /*红外接收传感器*/
    //% blockId=mbit_InfraredReception_Sensor block="红外接收传感器 管脚 %pin|状态 %value"
    //% weight=4
    //% blockGap=8
    //% color="#C814B8"
           export function InfraredReception_Sensor(pin: DigitalPin, value: enInfraredReception): boolean {
        pins.setPull(pin, PinPullMode.PullUp);
        if (pins.digitalReadPin(pin) == value) {
            return true;
        }
        else {
            return false;
        }
    }
           
           
      /*震动传感器*/
    //% blockId=mbit_Shock_Sensor block="震动传感器 管脚 %pin|状态 %value"
    //% weight=4
    //% blockGap=8
    //% color="#C814B8"
           export function Shock_Sensor(pin: DigitalPin, value: enShock): boolean {
        let theShockState = 0;
        pins.setPull(pin, PinPullMode.PullUp);
        if(pins.digitalReadPin(pin) == 1){
             basic.pause(100);
            if(pins.digitalReadPin(pin) == 1){
                theShockState= 0;
            }
            else{
               theShockState= 1;
            }
        }
         else{
             basic.pause(100);
            if(pins.digitalReadPin(pin) == 1){
                theShockState= 1;
            }
            else{
               theShockState= 0;
            }
         }
        if (theShockState == value) {
            return true;
        }
        else {
            return false;
        }
    }     
}
