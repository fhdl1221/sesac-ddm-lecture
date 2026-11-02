package com.lecture.section04.sort;

import java.util.Arrays;

public class Application2 {
    public static void main(String[] args) {
        /*
         * [선택 정렬]
         * 정렬되지 않은 범위에서 가장 작은 값의 위치를 찾고,
         * 그 값을 정렬되지 않은 범위의 첫 번째 값과 교환하는 과정을 반복한다
         * */

        int[] arr = {2, 5, 4, 6, 1, 3};
        System.out.println("정렬 전 : " + Arrays.toString(arr));

        for(int i = 0; i < arr.length; i++){
            int minIndex = i;

            for(int j = i + 1; j < arr.length; j++){
                if(arr[j] < arr[minIndex]){
                    minIndex = j;
                }
            }
            int temp = arr[minIndex];
            arr[minIndex] = arr[i];
            arr[i] = temp;
        }
        System.out.println("정렬 후 : " + Arrays.toString(arr));
    }
}
