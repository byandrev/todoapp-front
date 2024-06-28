import {
  Flex, Button, useDisclosure, Input, Badge,
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import { useQuery } from "react-query";
import useUser from "../hooks/useUser";
import { getTasks, updateTaskStatus, deleteTask, editTask } from "../services/TasksService";
import { MdOutlineDeleteOutline, MdOutlineEdit } from "react-icons/md";
import { useState, useRef, useEffect } from 'react'

const UserTasks = () => {
  const [sortedTasks, setSortedTasks] = useState([]);
  const { token, loading } = useUser();
  const { isOpen: isDeleteOpen, onOpen: onDeleteOpen, onClose: onDeleteClose } = useDisclosure();
  const { isOpen: isEditOpen, onOpen: onEditOpen, onClose: onEditClose } = useDisclosure();
  const [selectedTask, setSelectedTask] = useState(null);
  const [newTaskName, setNewTaskName] = useState('')
  const [newTaskPriority, setNewTaskPriority] = useState('')
  const cancelRef = useRef()

  const { isLoading, data, refetch } = useQuery(
    ["tasks", token],
    () => getTasks(token),
    {
      enabled: !!token,
    }
  );

  useEffect(() => {
    if (data) {
      const sorted = [...data.results]?.sort((a, b) => a.priority - b.priority);
      setSortedTasks(sorted);
    }
  }, [data]);

  const handleCompleteTask = async (taskId, taskName, newStatus) => {
    try {
      await updateTaskStatus(token, taskId, taskName, newStatus)
      refetch()
    } catch (error) {
      console.error("Error al completar la tarea:", error)
    }
  };

  if (loading || isLoading) {
    return <div>Loading...</div>;
  }

  if (!data || !data.results || data.results.length === 0) {
    return <div>No tasks available</div>;
  }

  const handleDeleteTask = async () => {
    if (!selectedTask) return
    try {
      await deleteTask(token, selectedTask.id)
      refetch()
      setSelectedTask(null)
      onDeleteClose();
    } catch (error) {
      console.error("Error al eliminar la tarea:", error)
    }
  }

  const handleEditTask = async () => {
    if (!selectedTask) return
    try {
      await editTask(token, selectedTask.id, newTaskName, newTaskPriority)
      refetch()
      setSelectedTask(null)
      onEditClose()
    } catch (error) {
      console.error("Error al editar la tarea:", error)
    }
  };

  return (
    <div>
      <h1>Lista de tus tareas ordenadas por <Badge colorScheme='red'>PRIORIDAD</Badge>:</h1>
      <div
        style={{ display: "flex", flexWrap: "wrap", flexDirection: "column" }}
      >
        {sortedTasks?.map((task, index) => (
          <Flex
            key={index}
            style={{
              border: "1px solid #ccc",
              borderRadius: "8px",
              padding: "16px",
              margin: "8px",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "1rem",
            }}
          > 
            <Flex gap='4' alignItems='center'>
            <Badge colorScheme='red' width='1rem' overflow='hidden'>{task.priority}</Badge>
            {task.status === "Pending" && (
              <Button
                onClick={() => handleCompleteTask(task.id, task.name, "Completed")}
                size="xs"
                borderRadius="100%"
                variant="outline"
                borderColor="#cf2b1f"
                borderWidth="2px"
              ></Button>
            )}
            {task.status === "Completed" && (
              <Button
                onClick={() => handleCompleteTask(task.id, task.name, "Pending")}
                size="xs"
                borderRadius="100%"
                variant="solid"
                backgroundColor='green'
              ></Button>
            )}
            </Flex>
            <Flex width='10rem' overflow='hidden'>{task.name}</Flex>
            <Flex gap={2} alignItems="center">
              <Button colorScheme="none" p={0} onClick={() => {
                setSelectedTask(task)
                setNewTaskName(task.name)
                setNewTaskPriority(task.priority)
                onEditOpen()
              }}>
                <MdOutlineEdit color="black" />
              </Button>
              <Button colorScheme="none" p={0} onClick={() => {
                setSelectedTask(task)
                onDeleteOpen()
              }}>
                <MdOutlineDeleteOutline color="black" />
              </Button>
            </Flex>
          </Flex>
        ))}
      </div>

      <AlertDialog
        isOpen={isDeleteOpen}
        leastDestructiveRef={cancelRef}
        onClose={onDeleteClose}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              Eliminar Tarea
            </AlertDialogHeader>

            <AlertDialogBody>
              ¿Estás seguro de que deseas eliminar esta tarea? No puedes deshacer esta acción después.
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={onDeleteClose}>
                Cancelar
              </Button>
              <Button colorScheme="red" onClick={handleDeleteTask} ml={3}>
                Eliminar
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>

      <Modal isOpen={isEditOpen} onClose={onEditClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Editar Tarea</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Input
              value={newTaskName}
              onChange={(e) => setNewTaskName(e.target.value)}
              placeholder="Nuevo nombre de la tarea"
            />
            <Input
              value={newTaskPriority}
              onChange={(e) => setNewTaskPriority(e.target.value)}
              placeholder="Nueva prioridad de la tarea"
            />
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" onClick={handleEditTask}>
              Guardar
            </Button>
            <Button variant="ghost" onClick={onEditClose} ml={3}>
              Cancelar
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div >
  );
};

export default UserTasks;
