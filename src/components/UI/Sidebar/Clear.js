import "./SidebarStyle.css";

const Clear = () => {
  return(
 
  <div className="clear-modal" tabindex="-1">
       <button type="button" className="butn" data-bs-toggle="modal" data-bs-target="#exampleModal">
        nour
     </button>
    <div className="modal-body">
      <p>Clear all Recents? </p>
    </div>

    <div className="modal-footer">
      <button
        type="button"
        id="btn btn-color-secondary"
        data-bs-dismiss="modal"
      >
        Cancel
      </button>
      <button type="button" id="btn btn-color-danger">
        Clear
      </button>
    </div>
  </div>
  )
};

export default Clear;
