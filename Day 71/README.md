100DaysOfCodeChallenge - Day 71

1) Hacker Rank Practice

In this challenge, you must read an integer, a double, and a String from stdin, then print the values according to the instructions in the Output Format section below. To make the problem a little easier, a portion of the code is provided for you in the editor.

Note: We recommend completing Java Stdin and Stdout I before attempting this challenge.

Input Format

There are three lines of input:

The first line contains an integer.
The second line contains a double.
The third line contains a String.
Output Format

There are three lines of output:

On the first line, print String: followed by the unaltered String read from stdin.
On the second line, print Double: followed by the unaltered double read from stdin.
On the third line, print Int: followed by the unaltered integer read from stdin.
To make the problem easier, a portion of the code is already provided in the editor.

Note: If you use the nextLine() method immediately following the nextInt() method, recall that nextInt() reads integer tokens; because of this, the last newline character for that line of integer input is still queued in the input buffer and the next nextLine() will be reading the remainder of the integer line (which is empty).

Sample Input

42
3.1415
Welcome to HackerRank's Java tutorials!
Sample Output

String: Welcome to HackerRank's Java tutorials!
Double: 3.1415
Int: 42

Solution:
import java.util.Scanner;

public class Solution {

    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
        int i = scan.nextInt();

        // Write your code here.
        double d = scan.nextDouble();
        String s;
        StringBuffer sb = new StringBuffer();       
        while (scan.hasNext()){
            sb.append(scan.next() + " ");
        }
        s = sb.toString();
        System.out.println("String: " + s);
        System.out.println("Double: " + d);
        System.out.println("Int: " + i);
    }
}

2)Given a  2D Array, :

1 1 1 0 0 0
0 1 0 0 0 0
1 1 1 0 0 0
0 0 0 0 0 0
0 0 0 0 0 0
0 0 0 0 0 0
We define an hourglass in  to be a subset of values with indices falling in this pattern in 's graphical representation:

a b c
  d
e f g
There are  hourglasses in , and an hourglass sum is the sum of an hourglass' values. Calculate the hourglass sum for every hourglass in , then print the maximum hourglass sum.

For example, given the 2D array:

-9 -9 -9  1 1 1 
 0 -9  0  4 3 2
-9 -9 -9  1 2 3
 0  0  8  6 6 0
 0  0  0 -2 0 0
 0  0  1  2 4 0
We calculate the following  hourglass values:

-63, -34, -9, 12, 
-10, 0, 28, 23, 
-27, -11, -2, 10, 
9, 17, 25, 18
Our highest hourglass value is  from the hourglass:

0 4 3
  1
8 6 6
Note: If you have already solved the Java domain's Java 2D Array challenge, you may wish to skip this challenge.

Function Description

Complete the function hourglassSum in the editor below. It should return an integer, the maximum hourglass sum in the array.

hourglassSum has the following parameter(s):

arr: an array of integers
Input Format

Each of the  lines of inputs  contains  space-separated integers .

Constraints

Output Format

Print the largest (maximum) hourglass sum found in .

Sample Input

1 1 1 0 0 0
0 1 0 0 0 0
1 1 1 0 0 0
0 0 2 4 4 0
0 0 0 2 0 0
0 0 1 2 4 0
Sample Output

19
Explanation

 contains the following hourglasses:

image
The hourglass with the maximum sum () is:

2 4 4
  2
1 2 4

import java.io.*;
import java.math.*;
import java.security.*;
import java.text.*;
import java.util.*;
import java.util.concurrent.*;
import java.util.regex.*;

public class Solution {

    // Complete the hourglassSum function below.
    static int hourglassSum(int[][] arr) {
        int[] hourglassTotals = hourglassTotals[(arr.length - 3) * (arr[0].length - 3)]]
        for (int i = 0; i < arr.length - 2;i++){
            for(int j = 0; j < arr[i].length - 2; j++){
                int hourglassTotal = 0;
                int firstRow = arr[i][j] + arr[i][j + 1] + arr[i][j + 2];
                int secondRow = arr[i + 1][j + 1];
                int thirdRow = arr[i + 2][j] + arr[i + 2][j + 1] + arr[i + 2][j + 2];
                hourglassTotal = firstRow + secondRow + thirdRow;
                hourglassTotals.append(hourglassTotal);
            }
        }
        return max;
    }
    private static final Scanner scanner = new Scanner(System.in);

    public static void main(String[] args) throws IOException {
        BufferedWriter bufferedWriter = new BufferedWriter(new FileWriter(System.getenv("OUTPUT_PATH")));

        int[][] arr = new int[6][6];

        for (int i = 0; i < 6; i++) {
            String[] arrRowItems = scanner.nextLine().split(" ");
            scanner.skip("(\r\n|[\n\r\u2028\u2029\u0085])?");

            for (int j = 0; j < 6; j++) {
                int arrItem = Integer.parseInt(arrRowItems[j]);
                arr[i][j] = arrItem;
            }
        }

        int result = hourglassSum(arr);

        bufferedWriter.write(String.valueOf(result));
        bufferedWriter.newLine();

        bufferedWriter.close();

        scanner.close();
    }
}
