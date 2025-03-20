#include <stdio.h>
#include <string.h>
#include <ctype.h>

#define MAX 100

char stack[MAX][MAX];
int top = -1;
char input[MAX];
int inputPointer = 0;

void push(char *str) {
    strcpy(stack[++top], str);
}

void pop() {
    top--;
}

char *peek() {
    return stack[top];
}

void displayStack() {
    for (int i = 0; i <= top; i++) {
        printf("%s ", stack[i]);
    }
}

int isTerminal(char c) {
    return (c == '+' || c == '*' || c == '(' || c == ')' || isalnum(c));
}

void shift() {
    char temp[2] = {input[inputPointer++], '\0'};
    push(temp);
    printf("Shift: %s\n", temp);
}

void reduce() {
    if (top >= 2 && isalpha(stack[top][0]) && strcmp(stack[top-1], "*") == 0 && isalpha(stack[top-2][0])) {
        // Reduce T -> T * F
        pop();
        pop();
        pop();
        push("T");
        printf("Reduce: T -> T * F\n");
    } else if (top >= 2 && isalpha(stack[top][0]) && strcmp(stack[top-1], "+") == 0 && isalpha(stack[top-2][0])) {
        // Reduce E -> E + T
        pop();
        pop();
        pop();
        push("E");
        printf("Reduce: E -> E + T\n");
    } else if (top >= 1 && isalpha(stack[top][0])) {
        // Reduce F -> id
        pop();
        push("F");
        printf("Reduce: F -> id\n");
    } else if (top >= 3 && strcmp(stack[top-2], "(") == 0 && strcmp(stack[top], ")") == 0 && isalpha(stack[top-1][0])) {
        // Reduce F -> ( E )
        pop();
        pop();
        pop();
        push("F");
        printf("Reduce: F -> ( E )\n");
    } else {
        printf("Error in reduction\n");
        exit(1);
    }
}

int main() {
    printf("Enter the input string: ");
    scanf("%s", input);

    printf("Stack\t\tInput\t\tAction\n");

    while (input[inputPointer] != '\0') {
        printf("\n");
        displayStack();
        printf("\t\t%s\t\t", input + inputPointer);
        shift();

        while (1) {
            if (top >= 0 && isTerminal(peek()[0])) {
                if (top >= 1 && strcmp(stack[top], "id") == 0) {
                    break;
                } else if (top >= 2 && (strcmp(stack[top-1], "+") == 0 || strcmp(stack[top-1], "*") == 0) && isTerminal(stack[top][0]) && isTerminal(stack[top-2][0])) {
                    break;
                }
            }

            if (top >= 0 && (strcmp(peek(), "E") == 0 || strcmp(peek(), "T") == 0 || strcmp(peek(), "F") == 0)) {
                break;
            }

            printf("\n");
            displayStack();
            printf("\t\t%s\t\t", input + inputPointer);
            reduce();
        }
    }

    while (top > 0) {
        printf("\n");
        displayStack();
        printf("\t\t%s\t\t", input + inputPointer);
        reduce();
    }

    if (strcmp(stack[0], "E") == 0) {
        printf("\nAccepted\n");
    } else {
        printf("\nRejected\n");
    }

    return 0;
}
