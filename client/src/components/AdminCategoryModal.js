import React, { useState } from "react";
import { showErrorMsg, showSuccessMsg } from "./helpers/message";
import isEmpty from "validator/lib/isEmpty";
import { createCategory } from "../api/category";
import { showLoading } from "./helpers/loading";

const AdminCategoryModal = () => {
  const [category, setCategory] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  const [loading, setLoading] = useState(false);

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
    setErrorMsg("");
    setSuccessMsg("");
  };

  //clear success and error message when modal close
  const handleMessages = (e) => {
    setErrorMsg("");
    setSuccessMsg("");
  };
  const handleCategorySubmit = (e) => {
    e.preventDefault();

    //client side validation(validator)
    if (isEmpty(category)) {
      setErrorMsg("Please enter a category");
    } else {
      //success
      const data = { category };
      //request to api
      setLoading(true);
      createCategory(data)
        .then((response) => {
          setLoading(false);
          setSuccessMsg(response.data.successMessage);
          setCategory("");
        })
        .catch((err) => {
          setLoading(false);
          setErrorMsg(err.response.data.errorMessage);
        });
    }
  };
  return (
    <div id="addCategoryModal" className="modal fade" onClick={handleMessages}>
      <div className="modal-dialog modal-dialog-centered modal-lg">
        <div className="modal-content">
          <form onSubmit={handleCategorySubmit}>
            <div className="modal-header bg-info text-white">
              {errorMsg && showErrorMsg(errorMsg)}
              {successMsg && showSuccessMsg(successMsg)}

              <h5 className="modal-text">Add Category</h5>
              <button className="close">
                <span>
                  <i
                    className="fas fa-times text-white"
                    data-dismiss="modal"
                  ></i>
                </span>
              </button>
            </div>
            <div className="modal-body my-3">
              {loading ? (
                <div className="text-center"> {showLoading()}</div>
              ) : (
                <>
                  <label className="text-dark">Category Name</label>
                  <input
                    type="text"
                    name="category"
                    value={category}
                    className="form-control"
                    onChange={handleCategoryChange}
                  />
                </>
              )}
            </div>
            <div className="modal-footer">
              <button type="submit" className="btn btn-success">
                Save
              </button>
              <button className="btn btn-danger" data-dismiss="modal">
                Close
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdminCategoryModal;
