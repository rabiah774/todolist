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
            scanner.nextLine(); 
            switch(choice) {
                case 1:
                    System.out.println("Enter the task to add:");
                    String taskToAdd = scanner.nextLine();
                    todoList.add(taskToAdd);
                    System.out.println("Task added.");
                    break;
                case 2:
                    System.out.println("Your To-Do List:");
                    for (int i = 0; i < todoList.size(); i++) {
                        System.out.println((i + 1) + ". " + todoList.get(i));
                    }
                    break;
                    case 3:
                    System.out.println("Enter the task number to remove:");
                    int tasknumber = scanner.nextInt();
                    if (tasknumber > 0 && tasknumber <= todoList.size()) {
                        todoList.remove(tasknumber - 1);
                        System.out.println("Task removed.");
                    } else {
                        System.out.println("Invalid task number.");
                   }
                    break;
                
        }
    }
}
}


