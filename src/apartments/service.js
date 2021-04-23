/**
 * 
 * @param {*} repo 
 */
function AppartmentService(repo) {
    this.repo = repo;
    
    this.getAll = async () => {
        return this.repo.getAll();
    }
}

module.exports = { AppartmentService };
