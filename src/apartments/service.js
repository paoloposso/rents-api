/**
 * 
 * @param {*} repo 
 */
function ApartmentService(repo) {
    this.repo = repo;
    
    this.getAll = async () => {
        return this.repo.getAll();
    }
}

module.exports = { ApartmentService };
