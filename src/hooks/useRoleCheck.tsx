import { canAccess } from "@/providers/accessControl";
import { useEffect, useState } from "react";

const useRoleCheck = () => {
  const [isStudent, setIsStudent] = useState(false);
  const [isTeacher, setIsTeacher] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const checkPermissions = async () => {
      const role = sessionStorage.getItem("highestRole") ?? "student";
      setIsStudent(await canAccess(role, "classesStudentLimited", "list"));
      setIsTeacher(await canAccess(role, "classesTeacherLimited", "list"));
      setIsAdmin(role === "admin");
    };
    checkPermissions();
  }, []);

  return { isStudent, isTeacher, isAdmin };
};

export default useRoleCheck;
