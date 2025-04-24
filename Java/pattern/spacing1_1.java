public class spacing1_1 {
    public static void main(String[] args){
        int num=1;
        int n=5;
        for(int i=0;i<=n;i++){
            for(int j=i;j>0;j--){
                System.out.print(num+ " ");
                num++;
            }
            System.out.println("");
        }
    }
}
