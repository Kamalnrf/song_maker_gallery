import React, { useState, Fragment } from "react";
import styles from "./teacher.module.css";

const Add = (props) => {
  return (
    <div>
      <h3>Add a Gallery</h3>
      <p className={styles.par_just}>
        To add a group to your gallery, upload a spreadsheet of students' names,
        and their music lab links. You may use students' first names only. If
        you do upload students' full names, their first name and last initial is
        all that will be displayed.
      </p>
      <p className={styles.par_just}>
        The spreadsheet must be in the form of a .csv file, which you can easily
        output from Excel or google sheets. As long as there is a column labeled
        "names," and "links," in the spreadsheet, we will pick up on the rest.{" "}
        <a href="https://placeholder.com/">
          Click here if you'd like me to walk you through it, I promise it's a
          piece of cake!
        </a>
      </p>
      <p className={styles.par_just}>
        A gallery can have up to five groups in it, and you can make as many
        galleries as you would like. Limiting it to five groups per gallery
        ensures a consistent design, and prevents viewers being presented with a
        monolith page to scroll through. Add groups by uploading CSV files of
        names and links one at a time!
      </p>
      <p className={styles.par_just}>Upload your spreadsheet</p>
      <input
        className={styles.upload}
        type="file"
        onChange={(e) => props.file_selected(e)}
        value={props.file}
      />
      <br />
      <button
        onClick={() => props.uploadRequest()}
        className={`button ${styles.up_btn}`}
      >
        Upload
      </button>
      <button
        onClick={(e) => props.clearFileHandler(e)}
        className={`button ${styles.restart_btn}`}
      >
        Restart
      </button>
      {props.warn ? (
        <Fragment>
          <br />
          <p className={styles.warning}>
            You may only upload a csv file. At this time, we do not accept Excel
            files, or any other file format. I have some videos below that might
            help you if you are using Excel or google sheets, though!
          </p>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/ScMzIvxBSi4"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </Fragment>
      ) : null}
      {props.file ? (
        <Fragment>
          <p>
            You can customize the name of each group, but we'll use the filename
            as the default groupname. If you're happy with the groupname below,
            leave it; otherwise, change it to whatever you like!
          </p>
          <input
            className={`${styles.input} ${styles.wide_input}`}
            value={props.groupname}
            onChange={(e) => props.groupNameChangeHandler(e)}
          />
        </Fragment>
      ) : null}
    </div>
  );
};

export default Add;
