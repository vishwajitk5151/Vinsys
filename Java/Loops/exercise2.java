package Vinsys.Java.Loops;

import java.util.Scanner;

public class exercise2 {
    public static void main(String[] args) {
        int n=3;

        
        for(int i=1;i<n;i++){
            
                    for(int z=i;z<n;z++){
                        System.out.print(" ");
    
                    }
                    
                    for(int k=1;k<=(2*i-1);k++){
                        System.out.print("*");
                    }

                System.out.println();
        }
        for(int i=n;i>0;i--){
            for(int j=i;j<n;j++){
                System.out.print(" ");
            }
            for(int k=1;k<=(2*i-1);k++){
                System.out.print("*");
            }
            System.out.println();
        }

    }
}
