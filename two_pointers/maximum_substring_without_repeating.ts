function lengthOfLongestSubstring(s: string): number {
    let seen= {};
    let L =0, R = 0;
    let longest_substring = 0;
    // keep iterating while R reaches the end of the string
    
    while(R<s.length) {
   
        seen[s[R]] = (seen[s[R]] || 0) + 1;    
    
        while(seen[s[R]]>1) {
             seen[s[L]] -= 1;
             L += 1;
        }
        let current_substring_length = R-L +1;
        if(current_substring_length > longest_substring) {
            longest_substring = current_substring_length;
        }
        R += 1;
    }

    return longest_substring;
};
