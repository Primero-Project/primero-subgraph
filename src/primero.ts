import { BigInt } from "@graphprotocol/graph-ts";
import { CourseItemCreated } from "../generated/Primero/Primero";
import { Course } from "../generated/schema";

export function handleCourseItemCreated(course: CourseItemCreated): void {
  let newCourse = Course.load(course.params.courseNFTId.toHex());
  if (newCourse == null) {
    newCourse = new Course(course.params.courseNFTId.toHex());
    newCourse.courseID = course.params.courseNFTId;
    newCourse.instructor = course.params.seller;
    newCourse.coursePrice = course.params.price;
    // newCourse.student = course.params;
    newCourse.save();
  }
}
