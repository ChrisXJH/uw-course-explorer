import { useHistory } from "react-router-dom";

export const useNavigation = () => {
  const history = useHistory();

  const navigateTo = (link, searchParams) => {
    let params = "";

    if (searchParams) {
      params = `?${searchParams.toString()}`;
    }

    history.push(`${link}${params}`);
  };

  return { navigateTo };
};

export const getCourseLink = course =>
  `/subjects/${course.subject}/${course.catalog_number}`;

export const getSubjectsPageLink = () => "/subjects";

export const getSubjectLink = subject =>
  `${getSubjectsPageLink()}/${subject.subject}`;

export const getResultsPageLink = query => `/results?query=${query}`;
