import * as UsersActionCreators from './fetchAllUsers';
import * as TodosActionCreators from './fetchTodos';
import * as CerttainUserActionCreators from './fetchCertainUser'

export default {
  ...TodosActionCreators,
  ...UsersActionCreators,
  ...CerttainUserActionCreators,
};
