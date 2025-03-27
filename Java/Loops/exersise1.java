package Vinsys.Java.Loops;

import java.util.Scanner;

public class exersise1 {
    public static void main(String[] args) {
        Scanner sc=new Scanner(System.in);
        System.out.println("Enter the No. for Printing Stars:");
        int numstar=sc.nextInt();
        for(int i=0;i<numstar;i++){
            System.out.print("*");
        }

    }
}
