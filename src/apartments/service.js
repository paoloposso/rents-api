/**
 * 
 * @param {*} repo 
 */
function ApartmentService(repo, idGenerator) {
    this.repo = repo;
    this.idGenerator = idGenerator;
    
    this.getAll = async () => {
        return this.repo.getAll();
    }

    this.save = async (apartment) => {
        if (!apartment.id) {
            apartment.id = this.idGenerator.generate();
            return this.repo.create(apartment);
        }
        return this.repo.update(apa)
    }
}

module.exports = { ApartmentService };
