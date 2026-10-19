package com.lecture.section02.userexception.exception;

public class NotEnoughMoneyException extends NegativeException{

    public NotEnoughMoneyException(String message) {
        super(message);
    }
}
