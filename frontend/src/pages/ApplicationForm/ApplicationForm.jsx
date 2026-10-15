import { createContext, useState } from "react";
import { Modal } from "../../components/Modal";
import { EducationProfile, ExperienceAndWork, JobProfile, JobType, OverviewCard, PersonalInformation } from "./Components";
import { useModalPage } from "../../hooks/useModalPage";
import { KnowledgePage } from "./Components/JobProfileLayouts/KnowledgePage";

export const FormContext = createContext()
const { Provider } = FormContext;

export const ApplicationForm = () => {
  const { page, handlePrevPage, handleNextPage, setPage } = useModalPage()
  const [openModal, setOpenModal] = useState(false)

  const RenderChildrenModal = ({ page }) => {
    const children = {
      1: <PersonalInformation />,
      2: <EducationProfile />,
      3: <JobProfile />,
      4: <KnowledgePage />,
      5: <ExperienceAndWork />,
      6: <JobType />
    }
    return (children[page])
  }

  return (
    <Provider value={{
      page,
      setPage,
      handlePrevPage,
      handleNextPage,
      openModal,
      setOpenModal
    }}>
      <div className='px-32 py-14'>
        <OverviewCard />
        <Modal>
          <RenderChildrenModal page={page} />
        </Modal>
      </div>
    </Provider>
  )
}