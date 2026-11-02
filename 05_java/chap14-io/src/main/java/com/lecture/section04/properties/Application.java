package com.lecture.section04.properties;

import java.io.*;
import java.nio.charset.StandardCharsets;
import java.util.Properties;

public class Application {
    public static void main(String[] args) {

        String filePath = "src/main/java/com/lecture/section04/properties";

        Properties prop = new Properties();
        prop.setProperty("app.name", "fullstack-course");
        prop.setProperty("app.version", "1.0");
        prop.setProperty("app.language", "ko");

        try(Writer writer = new OutputStreamWriter(new FileOutputStream(filePath),
                StandardCharsets.UTF_8)) {

            prop.store(writer, "Lecture");
        } catch (FileNotFoundException e) {
            e.printStackTrace();
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
