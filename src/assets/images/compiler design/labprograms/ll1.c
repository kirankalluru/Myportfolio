#include <stdio.h>
#include <string.h>

char str[25], st[25], *temp, ch, ch1;
char t[5][6][10] = {
    {"$", "$", "TX", "TX", "$", "$"},
    {"+TX", "$", "$", "$", "e", "e"},
    {"$", "$", "FY", "FY", "$", "$"},
    {"e", "*FY", "$", "$", "e", "e"},
    {"$", "$", "i", "(E)", "$", "$"}
};

int i, k, n, top = -1, r, c, m, flag = 0;

void push(char t) {
    top++;
    st[top] = t;
}

char pop() {
    ch1 = st[top];
    top--;
    return ch1;
}

int main() {
    printf("Enter the string:\n");
    scanf("%s", str);
    n = strlen(str);
    str[n++] = '$';
    i = 0;
    push('$');
    push('E');
    printf("Stack\tInput\tOperation\n");

    while (i <= top) {
        for (k = 0; k <= top; k++)
            printf("%c", st[k]);
        printf("\t");
        for (k = i; k < n; k++)
            printf("%c", str[k]);
        printf("\t");

        if (flag == 1)
            printf("pop");
        else if (flag == 2)
            printf("%c -> %s", ch, t[r][c]);

        printf("\n");

        if (str[i] == st[top]) {
            flag = 1;
            ch = pop();
            i++;
        } else {
            flag = 2;
            if (st[top] == 'E') r = 0;
            else if (st[top] == 'X') r = 1;
            else if (st[top] == 'T') r = 2;
            else if (st[top] == 'Y') r = 3;
            else if (st[top] == 'F') r = 4;
            else break;

            if (str[i] == '+') c = 0;
            else if (str[i] == '*') c = 1;
            else if (str[i] == 'i') c = 2;
            else if (str[i] == '(') c = 3;
            else if (str[i] == ')') c = 4;
            else if (str[i] == '$') c = 5;
            else break;

            if (strcmp(t[r][c], "$") == 0)
                break;

            ch = pop();
            temp = t[r][c];
            m = strlen(temp);
            if (strcmp(t[r][c], "e") != 0) {
                for (k = m - 1; k >= 0; k--)
                    push(temp[k]);
            }
        }
    }

    if (i == n)
        printf("\nParsed successfully");
    else
        printf("\nNot parsed");

    return 0;
}
