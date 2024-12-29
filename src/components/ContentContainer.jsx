import { ScrollArea } from '@/components/ui/scroll-area';
import { AppContext } from '@/lib/context/AppContext';
import { useContext } from 'react';

export default function ContentContainer() {
    const { model } = useContext(AppContext);

    return (
        <div className="flex flex-1 w-full p-2  border-black">
            {
                model !== "" ? (< div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 w-full">
                    {
                        (model === "all" || model === "chatgpt") &&
                        <div className="flex flex-col items-center h-full">
                            <span className="text-lg font-semibold mb-2 select-none">ChatGPT</span>
                            <ScrollArea className="border border-black w-full p-4 overflow-clip rounded-lg h-full">
                                Jokester began sneaking into the castle in the middle of the night and leaving
                                jokes all over the place: under the king's pillow, in his soup, even in the
                                royal toilet. The king was furious, but he couldn't seem to stop Jokester. And
                                then, one day, the people of the kingdom discovered that the jokes left by
                                Jokester were so funny that they couldn't help but laugh. And once they
                                started laughing, they couldn't stop.
                            </ScrollArea>
                        </div>
                    }

                    {
                        (model === "all" || model === "gemini") &&
                        <div className="flex flex-col items-center h-full">
                            <span className="text-lg font-semibold mb-2 select-none">Gemini</span>
                            <ScrollArea className="border border-black w-full p-4 overflow-auto rounded-lg h-full">
                                Jokester began sneaking into the castle in the middle of the night and leaving
                                jokes all over the place: under the king's pillow, in his soup, even in the
                                royal toilet. The king was furious, but he couldn't seem to stop Jokester. And
                                then, one day, the people of the kingdom discovered that the jokes left by
                                Jokester were so funny that they couldn't help but laugh. And once they
                                started laughing, they couldn't stop.
                                Jokester began sneaking into the castle in the middle of the night and leaving
                                jokes all over the place: under the king's pillow, in his soup, even in the
                                royal toilet. The king was furious, but he couldn't seem to stop Jokester. And
                                then, one day, the people of the kingdom discovered that the jokes left by
                                Jokester were so funny that they couldn't help but laugh. And once they
                                started laughing, they couldn't stop.
                                Jokester began sneaking into the castle in the middle of the night and leaving
                                jokes all over the place: under the king's pillow, in his soup, even in the
                                royal toilet. The king was furious, but he couldn't seem to stop Jokester. And
                                then, one day, the people of the kingdom discovered that the jokes left by
                                Jokester were so funny that they couldn't help but laugh. And once they
                                started laughing, they couldn't stop.
                            </ScrollArea>
                        </div>
                    }

                    {
                        (model === "all" || model === "gpt") &&
                        <div className="flex flex-col items-center h-full">
                            <span className="text-lg font-semibold mb-2 select-none">GPT</span>
                            <ScrollArea className="border border-black w-full p-4 overflow-auto rounded-lg h-full">
                                Jokester began sneaking into the castle in the middle of the night and leaving
                                jokes all over the place: under the king's pillow, in his soup, even in the
                                royal toilet. The king was furious, but he couldn't seem to stop Jokester. And
                                then, one day, the people of the kingdom discovered that the jokes left by
                                Jokester were so funny that they couldn't help but laugh. And once they
                                started laughing, they couldn't stop.
                                Jokester began sneaking into the castle in the middle of the night and leaving
                                jokes all over the place: under the king's pillow, in his soup, even in the
                                royal toilet. The king was furious, but he couldn't seem to stop Jokester. And
                                then, one day, the people of the kingdom discovered that the jokes left by
                                Jokester were so funny that they couldn't help but laugh. And once they
                                started laughing, they couldn't stop.
                                Jokester began sneaking into the castle in the middle of the night and leaving
                                jokes all over the place: under the king's pillow, in his soup, even in the
                                royal toilet. The king was furious, but he couldn't seem to stop Jokester. And
                                then, one day, the people of the kingdom discovered that the jokes left by
                                Jokester were so funny that they couldn't help but laugh. And once they
                                started laughing, they couldn't stop.
                                Jokester began sneaking into the castle in the middle of the night and leaving
                                jokes all over the place: under the king's pillow, in his soup, even in the
                                royal toilet. The king was furious, but he couldn't seem to stop Jokester. And
                                then, one day, the people of the kingdom discovered that the jokes left by
                                Jokester were so funny that they couldn't help but laugh. And once they
                                started laughing, they couldn't stop.
                            </ScrollArea>
                        </div>
                    }
                </div>) : (<div className='w-full h-full flex justify-center items-center opacity-50'>Please select model first...</div>)
            }
        </div >
    );
}




// import { ScrollArea } from '@/components/ui/scroll-area';
// import { AppContext } from '@/lib/context/AppContext';
// import { useContext } from 'react';

// export default function ContentContainer() {
//     const { model } = useContext(AppContext);

//     return (
//         <div className="flex flex-1 w-full p-2 border-black">
//             {
//                 model !== "" ? (
//                     <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 flex-grow w-full">
//                         {
//                             (model === "all" || model === "chatgpt") &&
//                             <div className="flex flex-col items-center h-full">
//                                 <span className="text-lg font-semibold mb-2 select-none">ChatGPT</span>
//                                 <ScrollArea className="border border-black overflow-auto w-full p-4 rounded-lg max-h-64">
//                                     {/* Example large content */}
//                                     <p>
//                                         Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam lectus. Sed sit amet ipsum mauris. Maecenas congue ligula ac quam viverra nec consectetur ante hendrerit. Donec et mollis dolor. Praesent et diam eget libero egestas mattis sit amet vitae augue. Nam tincidunt congue enim, ut porta lorem lacinia consectetur. Donec ut libero sed arcu vehicula ultricies a non tortor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ut gravida lorem. Sed mattis, sapien in sagittis venenatis, orci dolor tristique risus, vel auctor justo eros non eros. Lorem ipsum dolor sit amet.
//                                     </p>
//                                 </ScrollArea>
//                             </div>
//                         }

//                         {
//                             (model === "all" || model === "gemini") &&
//                             <div className="flex flex-col items-center h-full">
//                                 <span className="text-lg font-semibold mb-2 select-none">Gemini</span>
//                                 <ScrollArea className="border border-black overflow-auto w-full p-4 rounded-lg max-h-64">
//                                     {/* Gemini content goes here */}
//                                 </ScrollArea>
//                             </div>
//                         }

//                         {
//                             (model === "all" || model === "gpt") &&
//                             <div className="flex flex-col items-center h-full">
//                                 <span className="text-lg font-semibold mb-2 select-none">GPT</span>
//                                 <ScrollArea className="border border-black overflow-auto w-full p-4 rounded-lg max-h-64">
//                                     {/* GPT content goes here */}
//                                 </ScrollArea>
//                             </div>
//                         }
//                     </div>
//                 ) : (
//                     <div className='w-full h-full flex justify-center items-center opacity-50'>
//                         Please select model first...
//                     </div>
//                 )
//             }
//         </div>
//     );
// }
