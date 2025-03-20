#include <stdlib.h>
#include <stdio.h>
#include <string.h>

// Function to exit the program with a specific message
void f() {
    printf("Not operator grammar\n");
    exit(0);
}

int main() {
    char grm[20][20];
    int n;

    // Taking number of productions from the user
    printf("Enter the number of productions: ");
    scanf("%d", &n);

    printf("Enter the productions:\n");
    for (int i = 0; i < n; i++) {
        scanf("%s", grm[i]);
    }

    // Check each production
    for (int i = 0; i < n; i++) {
        int j = 3; // Start checking from the fourth character of the production
                   // assuming the first three characters are the left-hand side
                   // and the arrow (e.g., S->)
        
        // Ensure production starts with S->, A->, etc.
        if (grm[i][1] != '-' || grm[i][2] != '>') {
            f(); // Not a valid production
        }

        while (grm[i][j] != '\0') {
            char c = grm[i][j];
            // Check if the current character is a variable (assuming it's a capital letter or a digit)
            if ((c >= 'A' && c <= 'Z') || (c >= 'a' && c <= 'z') || (c >= '0' && c <= '9')) {
                // Check if the next character is an operator
                if (grm[i][j + 1] == '+' || grm[i][j + 1] == '-' || grm[i][j + 1] == '*' || grm[i][j + 1] == '/') {
                    j += 2; // Skip the operator and move to the next character after the operator
                } else if (grm[i][j + 1] == '\0') {
                    break; // End of production reached correctly
                } else {
                    f(); // Exit if no operator is found where expected
                }
            } else if (c == '$') {
                f(); // Exit if the end of production is reached incorrectly
            } else {
                f(); // Exit if an invalid character is found
            }
        }
    }

    printf("Operator grammar\n");
    return 0;
}
