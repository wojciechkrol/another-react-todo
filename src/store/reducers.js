import { combineReducers } from "redux";
import ReduxComposer from "../utils/ReduxComposer";
import todos from "./todos/reducer";
import filter from "./filter/reducer";

const composer = new ReduxComposer();

composer.add(todos);
composer.add(filter);

export default combineReducers(composer.all());
