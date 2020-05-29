import React from "react";
import { Link } from "react-router-dom";
import StagedGroup from "./staged_group";
import styles from "./add_gallery.module.css";

const staged = (props) => {
  return (
    <div>
      <h2>Your Staged Groups</h2>
      <br />
      <div className="description">
        <h3>Gallery Name:</h3>
        <input
          className={styles.wide_input}
          placeholder="Name of your gallery here"
          value={props.titleValue}
          onChange={(e) => props.titleInput(e)}
        />
        <h3>Gallery Name:</h3>
        <p>
          You may use this default description, or change it to whatever you
          prefer.
        </p>
        <textarea
          className={styles.desc_input}
          cols="67"
          rows="15"
          value={props.descriptionValue}
          onChange={(e) => props.descriptionInput(e)}
        />
        <table style={{ marginTop: "15px" }}>
          <thead>
            <tr>
              <td colSpan="3">Staged Groups</td>
            </tr>
          </thead>
          <tbody>
            {props.groups.map((group) => (
              <StagedGroup
                key={group.join("") + Math.random().toString()}
                unStageGroupHandler={props.unStageGroupHandler}
                group={group}
              />
            ))}
          </tbody>
        </table>
      </div>
      <br />
      <button
        className={styles.large_button}
        onClick={() => props.previewGallery()}
      >
        <p>Create Gallery</p>
        <p>(Once all of your groups are staged)</p>
      </button>
    </div>
  );
};

export default staged;