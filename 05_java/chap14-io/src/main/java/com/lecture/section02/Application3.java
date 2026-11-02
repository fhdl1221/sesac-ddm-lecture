package com.lecture.section02;

import java.io.*;
import java.nio.charset.StandardCharsets;

public class Application3 {
    public static void main(String[] args) {

        /*
        * FileReader: byte 단위가 아닌 문자 단위로 텍스트를 읽는다
        * */

        try(FileReader fr = new FileReader("src/main/java/com/lecture/section02/testReader.txt")) {

            int value;

            while((value = fr.read()) != -1) {
                System.out.println((char)value);
            }
        } catch (FileNotFoundException e) {
            e.printStackTrace();
        } catch (IOException e) {
            e.printStackTrace();
        }

        try (Reader reader = new InputStreamReader(
                new FileInputStream("src/main/java/com/lecture/section02/testReader.txt"),
                StandardCharsets.UTF_8)) {

            int value;
            while((value = reader.read()) != -1) {
                System.out.println((char)value);
            }
        } catch (FileNotFoundException e) {
            e.printStackTrace();
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
