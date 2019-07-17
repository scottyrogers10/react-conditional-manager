import React, { cloneElement } from "react";
import PropTypes from "prop-types";

const getDefaultKey = (componentMap, conditionKeys) =>
    Object.keys(componentMap).find(componentKey => !conditionKeys.includes(componentKey));

const getCurrentKey = conditions => {
    const currentCondition = conditions.find(condition => condition[Object.keys(condition)[0]]);
    return currentCondition && Object.keys(currentCondition)[0];
};

const ConditionalManager = props => {
    const componentMap = props.children;
    const conditionKeys = props.conditions.map(condition => Object.keys(condition)[0]);
    const defaultKey = getDefaultKey(componentMap, conditionKeys);
    const currentKey = getCurrentKey(props.conditions);

    return currentKey
        ? cloneElement(componentMap[currentKey], props.renderedProps)
        : defaultKey
        ? cloneElement(componentMap[defaultKey], props.renderedProps)
        : null;
};

ConditionalManager.propTypes = {
    children: PropTypes.object.isRequired,
    conditions: PropTypes.array,
    renderedProps: PropTypes.object
};

ConditionalManager.defaultProps = {
    conditions: [],
    renderedProps: {}
};

export default ConditionalManager;
