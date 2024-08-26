public class Portfolio {

    // Main method to execute the program
    public static void main(String[] args) {

        // Create an instance of the Portfolio class
        Portfolio portfolio = new Portfolio();

        // Display the portfolio information
        portfolio.displayPortfolio();
    }

    // Method to display the portfolio information
    private void displayPortfolio() {

        // Display the developer's name and title
        System.out.println("Hello, I'm a Front-end Developer.");

        // Display the developer's skills and services
        System.out.println("\nMy Skills and Services:");
        System.out.println("- Web Development");
        System.out.println("- App Design");
        System.out.println("- UI/UX Design");
        System.out.println("- JavaScript Frameworks");

        // Display the developer's contact information
        System.out.println("\nContact me at:");
        System.out.println("- Email: amogoe@email.com");
        System.out.println("- LinkedIn: linkedin.com/in/amogoe");

        // Display the developer's portfolio website
        System.out.println("\nVisit my portfolio website at:");
        System.out.println("- www.amogoe.com");
    }
}
