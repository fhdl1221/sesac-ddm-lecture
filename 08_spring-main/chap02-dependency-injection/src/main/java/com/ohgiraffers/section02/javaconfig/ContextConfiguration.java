package com.ohgiraffers.section02.javaconfig;

import com.ohgiraffers.common.Account;
import com.ohgiraffers.common.PersonalAccount;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class ContextConfiguration {

    @Bean
    public Account accountGenerator() {
        return new PersonalAccount(20, "110-234-567890");
    }
}
