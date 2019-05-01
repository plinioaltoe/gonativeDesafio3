import { call, put } from "redux-saga/effects";
import api from "../../services/api";
import { Creators as RepositoryActions } from "../ducks/repository";

export function* addRepository(action) {
  try {
    const { payload } = action;
    const { repoName } = payload;
    const { data } = yield call(api.get, `/users/${repoName}`);

    const repositoryData = {
      id: data.id,
      name: data.name,
      login: data.login,
      avatar_url: data.avatar_url,
      bio: data.bio
    };

    yield put(RepositoryActions.addRepositorySuccess(repositoryData));
  } catch (error) {
    const erroMsg = "Erro ao adicionar repositório";

    yield put(RepositoryActions.addRepositoryFailure(erroMsg));
  }
}
