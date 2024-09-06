'use server'
import {createMuscle } from"./dbCreate"

import { getAllMuscles, getMuscleNames} from "./dbRead"

export default async function addData() { 
  console.log("RUNNING PRISMA SCRIPT FOR ADDING DATA")
  console.time("Data Adder")
  const test = await createMuscle("123456789012345","PUSH")
  const names = getMuscleNames()
  console.log(test)
  console.timeEnd("Data Adder")
}

function notRunning(){
  createMuscle("Upper Chest","PUSH")
  createMuscle("Middle Chest","PUSH")
  createMuscle("Lower Chest","PUSH")
  createMuscle("Middle Delts","PUSH")
}