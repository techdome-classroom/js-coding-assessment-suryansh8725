const getTotalIsles = function (grid) {


  // write your code here
 if (!grid || !grid.length || !grid[0].length) return 0;
    
    const rows = grid.length;
    const cols = grid[0].length;
    let islands = 0;
    
    function exploreIsland(r, c) {
        if (r < 0 || r >= rows || c < 0 || c >= cols || grid[r][c] === 'W') {
            return;
        }
        
        grid[r][c] = 'W';  
        
        
        exploreIsland(r - 1, c); 
        exploreIsland(r + 1, c);  
        exploreIsland(r, c - 1);  
        exploreIsland(r, c + 1);  
    }
    
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            if (grid[r][c] === 'L') {
                islands++;
                exploreIsland(r, c);
            }
        }
    }
    
    return islands;
};

module.exports = getTotalIsles;
