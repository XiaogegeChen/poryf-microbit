//% color="#87CEEB" weight=100 icon="\uf1b6"
namespace DHT11 {

    let pin = DigitalPin.P1;
    let item: number[] = [];
    item = [0, 0, 0, 0, 0];
    //% color="#87CEEB" weight=100 blockGap=8
    //% blockId=dht11_set_pin block="温湿度传感器(DHT11) 管脚号 %dht11_pin"
    export function set_pin(dht11_pin: DigitalPin): void {
        pin = dht11_pin;
    }
    function dht11_get(): void {
        let cnt = 7;
        let idx = 0;
        let t = 0;
        for (let i = 0; i < 5; i++) {
            item[i] = 0;
        }
        pins.digitalWritePin(pin, 0);
        basic.pause(18);
        pins.digitalWritePin(pin, 1);
        t += 1;
        t += 1;
        t += 1;
        pins.setPull(pin, PinPullMode.PullUp);
        while (pins.digitalReadPin(pin) == 1); 
        while (pins.digitalReadPin(pin) == 0);
        while (pins.digitalReadPin(pin) == 1);
        for (let j = 0; j < 40; j++) {
            let count = 0;
            while (pins.digitalReadPin(pin) == 0);
            while (pins.digitalReadPin(pin) == 1) {
                count += 1;
                if (count > 4) {
                    item[idx] = item[idx] + (1 << cnt);
                }
                if (cnt == 0) {
                    cnt = 7;
                    idx++;
                } else {
                    cnt--;
                }
            }
        }
    }
    //% color="#87CEEB" weight=98 blockGap=8
    //%blockId=dht11_getTemperature block="获得温度值(DHT11)"
    export function getTemperature(): number {
        dht11_get();
        return item[2];
    }
    //% color="#87CEEB" weight=96 blockGap=8
    //%blockId=dht11_getHumidity block="获得湿度值(DHT11)"
    export function getHumidity(): number {
        dht11_get();
        return item[0];
    }
}
