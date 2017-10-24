
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

export const signup = (user) => (
  $.ajax({
    method: 'POST',
    url: 'api/users',
    data: user
  })
);
