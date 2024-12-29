import { Sidebar } from "@/components/ui/sidebar"
import { Send } from 'lucide-react'
import { Button } from "./ui/button"
import { useState, useCallback, useContext } from "react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { AppContext } from "@/lib/context/AppContext";
export function AppSidebar() {
  const [text, setText] = useState("");
  const { models, setModels, model, setModel } = useContext(AppContext);
  // const [model, setModel] = useState('');
  const checkBoxs = [
    {
      value: 'all',
      name: 'All'
    },
    {
      value: 'chatgpt',
      name: 'ChatGPT'
    },
    {
      value: 'gemini',
      name: 'Gemini'
    },
    {
      value: 'gpt',
      name: 'GPT'
    }
  ]
  const handleTextChange = useCallback((event) => {
    setText(event.target.value);
  }, []);

  const handleModelChange = (value) => {
    setModel(value);
  }

  const handleOnSend = () => {
    console.log("sent", { text, model });
    setModel("");
    setText("");
  }

  console.log({ text, model })
  return (
    <Sidebar>
      <div className="flex flex-col justify-between h-full p-2 my-4">
        <div className="flex justify-center">
          <span className="text-purple-600 text-lg font-semibold select-none">GenAI</span>
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex gap-2">
            <Select value={model} onValueChange={handleModelChange}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select Model" />
              </SelectTrigger>
              <SelectContent>
                {
                  checkBoxs && checkBoxs.map((item, index) => {
                    return <SelectItem value={item.value} key={index}>{item.name}</SelectItem>
                  })
                }
              </SelectContent>
            </Select>
            <Button className="rounded-full bg-purple-600" size="sm" onClick={handleOnSend}><Send /></Button>
          </div>
          <div className="flex items-center gap-2">
            <textarea value={text} onChange={handleTextChange} rows={4} className="w-full resize-none outline-none dark:bg-[#0a0a0a] border-b-2  p-3"
              style={{ scrollbarWidth: 'thin' }} placeholder="Enter your query here..." data-gramm="false" />
          </div>
        </div>
      </div>
    </Sidebar>
  )
}
