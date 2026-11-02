package com.lecture.section04.sort;

import java.util.Arrays;

public class Application5 {
    public static void main(String[] args) {
        // 1. 정수 6개를 저장할 배열을 만든다
        int[] arr = new int[6];

        /* 2. 1부터 45까지의 난수를 하나 만든다.
        * 현재 배열에 먼저 들어간 값들과 차례로 비교한다
        * 같은 값이 있으면 배열에 넣지 말고 새로운 난수를 다시 만든다
        * 중복되지 않을 때만 배열에 저장하고 다음 인덱스로 이동한다
        *
        * 힌트 : 배열에 몇 개를 저장했는지 나타내는 인덱스와 중복 여부를 기억할 boolean 변수를 사용할 수 있다
        * */

        boolean hasValue = false;
        int random;

        for(int i = 0; i < arr.length; i++){
            do {
                random = (int) (Math.random() * 45) + 1;
                hasValue = false;

                for(int j = 0; j < i; j++){
                    if(arr[j] == random){
                        hasValue = true;
                        break;
                    }
                }
            } while(hasValue);
            arr[i] = random;
        }

        // 3. 여섯 개를 모두 저장한 뒤 오름차순으로 정렬하고 출력한다 (어렵다면 sort 사용)
        Arrays.sort(arr);
        System.out.println(Arrays.toString(arr));
    }
}
