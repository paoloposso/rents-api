function AppartmentService(repo) {
    this.repo = repo;
    
    this.getByMinimumPrice = async (minimumPrice) => {
        return this.repo.getByMinimumPrice(minimumPrice);
    }
}

module.exports = { AppartmentService };