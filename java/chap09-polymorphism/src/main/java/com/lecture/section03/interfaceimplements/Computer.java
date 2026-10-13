package com.lecture.section03.interfaceimplements;

public class Computer {

    public void connectDevice(IConnectable device) {
        device.connect();
    }

    public void disconnectDevice(IConnectable device) {
        device.disconnect();
    }
}
