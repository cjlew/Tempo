
export const login = (user) => (
  $.ajax({
    method: 'POST',
    url: 'api/sessions',
    data: user
  })
);

export const logout = () => (
  $.ajax({
    method: 'DELETE',
    url: 'api/sessions'
  })
);

export const signup = (formData) => (
  $.ajax({
    method: 'POST',
    url: 'api/users',
    processData: false,
    contentType: false,
    dataType: 'json',
    data: formData
  })
);
