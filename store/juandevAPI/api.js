import axios from "axios";
const juandevAPI = axios.create({
  baseURL: "https://juan02082023-dev-106627.botics.co",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json"
  }
});

function api_docs_schema_retrieve(payload) {
  return juandevAPI.get(`/api-docs/schema/`, {
    params: {
      lang: payload.lang
    }
  });
}

function api_v1_azul_list(payload) {
  return juandevAPI.get(`/api/v1/azul/`);
}

function api_v1_azul_create(payload) {
  return juandevAPI.post(`/api/v1/azul/`, payload);
}

function api_v1_azul_retrieve(payload) {
  return juandevAPI.get(`/api/v1/azul/${payload.id}/`);
}

function api_v1_azul_update(payload) {
  return juandevAPI.put(`/api/v1/azul/${payload.id}/`, payload);
}

function api_v1_azul_partial_update(payload) {
  return juandevAPI.patch(`/api/v1/azul/${payload.id}/`, payload);
}

function api_v1_azul_destroy(payload) {
  return juandevAPI.delete(`/api/v1/azul/${payload.id}/`);
}

function api_v1_login_create(payload) {
  return juandevAPI.post(`/api/v1/login/`, payload);
}

function api_v1_newmo_list(payload) {
  return juandevAPI.get(`/api/v1/newmo/`);
}

function api_v1_newmo_create(payload) {
  return juandevAPI.post(`/api/v1/newmo/`, payload);
}

function api_v1_newmo_retrieve(payload) {
  return juandevAPI.get(`/api/v1/newmo/${payload.id}/`);
}

function api_v1_newmo_update(payload) {
  return juandevAPI.put(`/api/v1/newmo/${payload.id}/`, payload);
}

function api_v1_newmo_partial_update(payload) {
  return juandevAPI.patch(`/api/v1/newmo/${payload.id}/`, payload);
}

function api_v1_newmo_destroy(payload) {
  return juandevAPI.delete(`/api/v1/newmo/${payload.id}/`);
}

function api_v1_newmo45_list(payload) {
  return juandevAPI.get(`/api/v1/newmo45/`);
}

function api_v1_newmo45_create(payload) {
  return juandevAPI.post(`/api/v1/newmo45/`, payload);
}

function api_v1_newmo45_retrieve(payload) {
  return juandevAPI.get(`/api/v1/newmo45/${payload.id}/`);
}

function api_v1_newmo45_update(payload) {
  return juandevAPI.put(`/api/v1/newmo45/${payload.id}/`, payload);
}

function api_v1_newmo45_partial_update(payload) {
  return juandevAPI.patch(`/api/v1/newmo45/${payload.id}/`, payload);
}

function api_v1_newmo45_destroy(payload) {
  return juandevAPI.delete(`/api/v1/newmo45/${payload.id}/`);
}

function api_v1_signup_create(payload) {
  return juandevAPI.post(`/api/v1/signup/`, payload);
}

function modules_articles_article_list(payload) {
  return juandevAPI.get(`/modules/articles/article/`);
}

function modules_articles_article_create(payload) {
  return juandevAPI.post(`/modules/articles/article/`, payload);
}

function modules_articles_article_retrieve(payload) {
  return juandevAPI.get(`/modules/articles/article/${payload.id}/`);
}

function modules_articles_article_update(payload) {
  return juandevAPI.put(`/modules/articles/article/${payload.id}/`, payload);
}

function modules_articles_article_partial_update(payload) {
  return juandevAPI.patch(`/modules/articles/article/${payload.id}/`, payload);
}

function modules_articles_article_destroy(payload) {
  return juandevAPI.delete(`/modules/articles/article/${payload.id}/`);
}

function rest_auth_login_create(payload) {
  return juandevAPI.post(`/rest-auth/login/`, payload);
}

function rest_auth_logout_retrieve(payload) {
  return juandevAPI.get(`/rest-auth/logout/`);
}

function rest_auth_logout_create(payload) {
  return juandevAPI.post(`/rest-auth/logout/`);
}

function rest_auth_password_change_create(payload) {
  return juandevAPI.post(`/rest-auth/password/change/`, payload);
}

function rest_auth_password_reset_create(payload) {
  return juandevAPI.post(`/rest-auth/password/reset/`, payload);
}

function rest_auth_password_reset_confirm_create(payload) {
  return juandevAPI.post(`/rest-auth/password/reset/confirm/`, payload);
}

function rest_auth_registration_create(payload) {
  return juandevAPI.post(`/rest-auth/registration/`, payload);
}

function rest_auth_registration_verify_email_create(payload) {
  return juandevAPI.post(`/rest-auth/registration/verify-email/`, payload);
}

function rest_auth_user_retrieve(payload) {
  return juandevAPI.get(`/rest-auth/user/`);
}

function rest_auth_user_update(payload) {
  return juandevAPI.put(`/rest-auth/user/`, payload);
}

function rest_auth_user_partial_update(payload) {
  return juandevAPI.patch(`/rest-auth/user/`, payload);
}

export const apiService = {
  api_docs_schema_retrieve,
  api_v1_azul_list,
  api_v1_azul_create,
  api_v1_azul_retrieve,
  api_v1_azul_update,
  api_v1_azul_partial_update,
  api_v1_azul_destroy,
  api_v1_login_create,
  api_v1_newmo_list,
  api_v1_newmo_create,
  api_v1_newmo_retrieve,
  api_v1_newmo_update,
  api_v1_newmo_partial_update,
  api_v1_newmo_destroy,
  api_v1_newmo45_list,
  api_v1_newmo45_create,
  api_v1_newmo45_retrieve,
  api_v1_newmo45_update,
  api_v1_newmo45_partial_update,
  api_v1_newmo45_destroy,
  api_v1_signup_create,
  modules_articles_article_list,
  modules_articles_article_create,
  modules_articles_article_retrieve,
  modules_articles_article_update,
  modules_articles_article_partial_update,
  modules_articles_article_destroy,
  rest_auth_login_create,
  rest_auth_logout_retrieve,
  rest_auth_logout_create,
  rest_auth_password_change_create,
  rest_auth_password_reset_create,
  rest_auth_password_reset_confirm_create,
  rest_auth_registration_create,
  rest_auth_registration_verify_email_create,
  rest_auth_user_retrieve,
  rest_auth_user_update,
  rest_auth_user_partial_update
};