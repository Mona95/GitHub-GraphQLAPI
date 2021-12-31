/**
 * Includes all the helper methods
 */


/**
 * Responsible to check the form values in order to detect if its aclid or not
 * it's just a simple validation that can be improved
 * @param {*} values
 * @returns
 */
export const validate = (values) => {
  const { title, body } = values;
  const errors = {
    title_error: false,
    body_error: false,
  };

  errors.title_error = title.trim().length === 0;
  errors.body_error = body.trim().length === 0;

  return errors;
};
