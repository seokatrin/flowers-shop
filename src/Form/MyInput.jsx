import React from 'react';
import cn from "classnames";
import { useField } from "formik";

const MyInput = ({ ...props }) => {
    const [field, meta] = useField(props);
    return (
      <div className="contactForm__body">
        <input
          className={cn("contactForm__input", {
            "contactForm__input--error": meta.touched && meta.error,
          })}
          {...field}
          {...props}
        />
        {meta.touched && meta.error ? (
          <div className="error">{meta.error}</div>
        ) : null}
      </div>
    );
  };

export default MyInput;
