package Vinsys.Java.Loops;

public class prime {
    boolean isPrime(int num){
        int count=0;
        for(int i=1;i<=num/2;i++){
            if(num%i==0){
                count++;
            }
        }
    }
}
