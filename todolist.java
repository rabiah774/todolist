import java.util.ArrayList;
import java.util.Scanner;

public class todolist {
    public static void main(String[] args) {
        ArrayList<String> todoList = new ArrayList<>();
        Scanner scanner = new Scanner(System.in);
        System.out.println("Welcome to your To-Do List!");
        while(true) {
            System.out.println("Choose an option: 1.Add Task 2.View Tasks 3.Remove Task 4.Exit");
            int choice = scanner.nextInt();
            scanner.nextLine(); // Consume newline
        }
    }

    
}
