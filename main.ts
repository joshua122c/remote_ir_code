makerbit.onIrButton(IrButton.Any, IrButtonAction.Pressed, function () {
    sensors.i2cLcdDisplay_Control(Item._clear)
    sensors.i2cLcdShowString(1, 1, makerbit.irDatagram())
    sensors.i2cLcdShowNumber(2, 1, ir_datagram[0].indexOf(makerbit.irDatagram()))
    sensors.i2cLcdShowString(2, 7, ir_datagram[1][ir_datagram[0].indexOf(makerbit.irDatagram())])
})
let ir_datagram: string[][] = []
sensors.i2cLcdInit(39)
makerbit.connectIrReceiver(DigitalPin.P16, IrProtocol.Keyestudio)
ir_datagram = [[
"0x00FFA25D",
"0x00FF629D",
"0x00FFE21D",
"0x00FF22DD",
"0x00FF02FD",
"0x00FFC23D",
"0x00FFE01F",
"0x00FFA857",
"0x00FF906F",
"0x00FF9867",
"0x00FF6897",
"0x00FFB04F",
"0x00FF38C7",
"0x00FF18E7",
"0x00FF4AB5",
"0x00FF10EF",
"0x00FF5AA5"
], [
"1",
"2",
"3",
"4",
"5",
"6",
"7",
"8",
"9",
"0",
"*",
"#",
"OK",
"up",
"down",
"left",
"right"
]]
basic.forever(function () {
	
})
