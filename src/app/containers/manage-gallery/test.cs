// using System;
// using System.Collections.Generic;
// using System.IO;
// using System.Text;

// class Solution {
//     static void Main(String[] args) {
//         int cases = Convert.ToInt32(Console.ReadLine());
        
//         for(int i=0;i<cases;i++)
//         {
//             ProcessCase();
//         }
//     }
    
//     private static void ProcessCase()
//     {
//         string[] entries = Console.ReadLine().Split(' ');
//         int n = Convert.ToInt32(entries[0]);
//         int a = Convert.ToInt32(entries[1]);
//         int b = Convert.ToInt32(entries[2]);
//         string s = Console.ReadLine();
//         int cost = 0;
//         StringBuilder sb = new StringBuilder();
        
//         for(int i=0;i<n;i++)
//         {
//             bool hasCopied = false;
            
//             for(int j=0;j<i;j++)
//             {
//                 var potentialLength = i-j;
//                 Console.WriteLine("i:{0}, j:{1}, length:{2}", i, j, potentialLength);
                
//                 var potentialCopy = sb.ToString().Substring(j, potentialLength);
                
//                 if(i+potentialLength <= n &&
//                     sb.ToString() + potentialCopy == s.Substring(0, i+potentialLength))
//                 {                   
//                     sb.Append(potentialCopy);
//                     cost += b;
//                     i += potentialLength - 1;
//                     hasCopied = true;
//                     Console.WriteLine("copying {0} at cost {1}", potentialCopy, b);
//                     break;
//                 }
//             }
            
//             if(!hasCopied)
//             {
//                 sb.Append(s[i]);
//                 Console.WriteLine("Adding at cost {0}", a);
//                 cost += a; 
//             }
//         }
        
//         Console.WriteLine(sb);
//         Console.WriteLine(cost);
//     }
// }