const que =[
    {
        id:"01",
        question:'What will be the output of the following pseudocode?\n'+

        '    Integer n\n'+
        
        '    for (n = 3; n != 0; n--)\n'+
        
        '   Print n\n'+
        
        '   n = n-1\n'
        
        +'  end for',
       option:["1","2","3","infinite loop"],
       answer:"infinite loop"
    },
    {
        id:"02",
        question:"what will be the output of the following pseudocode\n\n"+
        'void fun(int x)\nx = 30;\nint main()\n{  int y = 20; \nfun(y); \nprintf("%d", y); \nreturn 0;',
        option:["20","30","compile time error","run time error"],
        answer:"compile time error"
    },
    {
        id:"03",
        question:'find output of code\n\nint main()\n{int n;\nfor (n = 9; n!=0; n--)\n{printf("n = %d", n--);\n return 0;\n}',
        option:["9 7 5 3 1","9 8 7 6 5 4 3 2 1","infinite Loop","9 7 5 3"],
        answer:"infinite Loop"
    },
    {
        id:"04",
        question:'find output of code\n\nint main()\n { int c = 5, no = 10;\n do \n{no /= c;}\n while(c--);\nprintf ("%d", no);\n return 0;\n}',
        option:["1","runtime error","0","compile time error"],
        answer:"runtime error"
    },
    {
        id:"05",
        question:'Which one of the following is an application of Queue Data Structure?',
        option:["When a resource is shared among multiple consumers.","When data is transferred asynchronously (data not necessarily received at same rate as sent) between two processes","Load Balancing","all the above"],
        answer:"all the above"
    },
    {
        id:"06",
        question:'Which of the following abstract data types can be used to represent a many to many relation?',
        option:["tree","plex","graph","both plex and graph"],
        answer:"both plex and graph"
    },
    {
        id:"07",
        question:'find out the output\n int a=10,b;\n  a>=5?b=100:b=200;\nprintf(“%d”,b);',
        option:["5","10","lvalue error occur","100"],
        answer:"lvalue error occur"
    },
    {id:"08",
     question:'Can you suggest some other way to write the following expression such that 30 is used only once?\na<=20?b=30:c=30;',
     option:["((a<=20)?&b:&c)=30);","(a<=20)?b=30:c=30"],
     answer:"((a<=20)?&b:&c)=30);"
    },
    {
     id:"09",
     question:'find output for \n int a;\na = (5,6);\nprintf(“%d”,a);',
     option:["5","6"," runtime error","compile time error"],
     answer:"6"
    },
    {
     id:"10",
     question:'find output\n\nint a =4,b =3,c;\nc = a-- -b;\nprintf(“%d%d%d”,a,b);',
     option:["3 2 1","3 3 1","1 2 1","4 3 0"],
     answer:"3 3 1"
    },
    {id:"11",
     question:'find output \n\n int a[ 5] = {5,1,15,20,25};\nint i,j,k = 1,m;\ni = ++a[1];\nj = a[1]++;\nm = a[i++];\nprintf(“%d %d %d”,i,j,k);',
     option:["3 2 15","20 15 3","25 20 1","5 2 1"],
     answer:"3 2 15"
    },
     {
         id:"12",
         question:'find output for program\n\n  static int a[5];\nint i;\nfor( i = 0; i<=4; i++){\n printf(“%d ”,a[i]);}',
         option:["0 0 0 0 0","1 2 3 4 5","1 1 1 1 1","error"],
         answer:"0 0 0 0 0"
     },
     {
      id:"13",
      question:'find output main()\n\n{\nprintf(5+ “Computers”);\n}',
      option:["ters","5computer","compile error","computers"],
      answer:"ters"
     },
     {
      id:"14",
      question:'main( )\n{  \nint i = 5, j = 3;\ncalc( &i , j);\n printf(“\n %d %d”,i,j);} \ncalc( int *i, int j)\n {\n *i =*i * *i;\nj = j*j;\n}',
      option:["25 3","5 3","125 9","25 9"],
      answer:"25 3",
     },
     {
      id:"15",
      question:'int Trial (int a, int b, int c) { \nif ((a > = b) && (c < b)) return b; \nelse if (a > = b) return Trial (a,c,b); \n  else return Trial (b,a,c); }',
      option:["Finds the maximum of a, b, and c "," Finds the minimum of a, b and c ","Finds the middle number of a, b, c ","None of the above"],
      answer:"Finds the middle number of a, b, c "
     },
    {
        id:"End",
        question:"thanks for playing",
        option:["submit"],
        answer:"finish"
    }

]
export default que;