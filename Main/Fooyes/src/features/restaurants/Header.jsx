function Header() {
  return (
    <div className="page_header element_to_stick">
      <div className="container">
        <div className="row justify-content-end">
          <div className="col-xl-4 col-lg-5 col-md-5">
            <div className="search_bar_list">
              <input
                type="text"
                className="form-control"
                placeholder="Dishes, restaurants or cuisines"
              />
              <button type="submit">
                <i className="icon_search"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
