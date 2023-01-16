<script lang="ts" setup>
import { ref } from "vue";
const tab = ref("problem0");
</script>

<template>
  <v-card>
    <v-tabs v-model="tab" align-tabs="title">
      <v-tab value="problem0"> Git Commit</v-tab>
      <v-tab value="problem1"> Problem 1 </v-tab>
      <v-tab value="problem2"> Problem 2 </v-tab>
      <v-tab value="problem3"> Problem 3 </v-tab>
      <v-tab value="problem4"> Problem 4 </v-tab>
    </v-tabs>

    <v-window v-model="tab">
      <v-window-item value="problem0">
        <v-card flat>
          <div class="ma-16 text-body">
            มีโจทย์ทั้งหมด 4 ข้อ โดยเมื่อทำเสร็จแต่ละข้อให้ commit message
            ตามที่โจทย์กำหนด
            <ol>
              <li>แต่ละข้อจะมี file เตรียมไว้ให้ตามโจทย์ ให้ทำตามคำอธิบาย</li>
              <li>ให้ commit ด้วยคำอธิบายของนิสิตเองในระหว่างข้อ</li>
              <li>เมื่อใดที่ทำเสร็จให้ commit ด้วย "Fin:ProblemX"</li>
              <li>
                เข้า form ตาม assignment เพื่อไปประเมินว่าตัวเองทำได้หรือไม่
                แนะนำให้ดูก่อน เป็นแนวทางในการทำ
                <span style="color: red"
                  >โดยหากประเมินได้ตรงจะได้คะแนนเพิ่ม
                  หากไม่ตรงจะโดนหักคะแนน</span
                >
              </li>
            </ol>
          </div>
        </v-card>
      </v-window-item>
      <v-window-item value="problem1">
        <v-card flat>
          <div class="ma-16 text-body">
            จงแก้ไข View/SolveProblem1 ให้สามารถทำได้ตามภาพ (เมื่อทำเสร็จให้
            message ของ commit ด้วย "Fin:Problem1")
            <ol>
              <li>โดยที่จะเริ่มต้นจากหน้ายิ้ม</li>
              <li>
                เมื่อใดก็ตามที่กดปุ่ม
                ปุ่มจะเปลี่ยนสีเป็นสีเหลืองและเปลี่ยนรูปภาพให้สอดคล้องกับคำที่อยู่บนปุ่ม
              </li>
              <li>file ที่เกี่ยวข้องอยู่ใน folder feeling_imgs</li>
            </ol>
          </div>
          <v-img src="problem1.gif"></v-img>
        </v-card>
      </v-window-item>
      <v-window-item value="problem2">
        <v-card flat>
          <div class="ma-16 text-body">
            จงแก้ไข View/SolveProblem2 ให้สามารถทำได้ตามภาพ (เมื่อทำเสร็จให้
            message ของ commit ด้วย "Fin:Problem2") ประกอบด้วย
            <ol>
              <li>ช่องใส่ตัวเลขโดยที่จะกำหนดค่าเริ่มต้นเป็น 0</li>
              <li>
                เมื่อใดก็ตามที่ทำให้ว่างจะมีการแจ้งตัวขึ้นเป็นสีแดง Number is
                not empty!!
              </li>
              <li>
                หากเป็นตัวเลขด้านล่างจะแสดงลำดับตัวเลขไล่เรียงจากซ้ายไปขวาจำนวนแถวละ
                12 ช่อง
              </li>
            </ol>
          </div>
          <v-img src="problem2.gif"></v-img>
        </v-card>
      </v-window-item>
      <v-window-item value="problem3">
        <v-card flat>
          <div class="ma-16 text-body">
            จงแก้ไข View/SolveProblem3 ให้สามารถทำได้ตามภาพ (เมื่อทำเสร็จให้
            message ของ commit ด้วย "Fin:Problem3") ประกอบด้วย
            <ol>
              <li>
                ใน file จะมีการสร้าง products เป็น array ไว้ให้ 100 ตัว จาก 0-99
              </li>
              <li>หน้าจอแบ่งออกเป็น 2 ส่วน เท่ากัน และสามารถ scroll ได้</li>
              <li>
                ในส่วนแรกให้แสดง product ดังรูป แบ่งเป็น 3 ชิ้นต่อ 1 แถว
                และมีปุ่ม Add อยู่ด้านล่าง
              </li>
              <li>
                ส่วนที่สองแสดงตารางโดยเริ่มต้นยังไม่มี product อะไรใน
                selectedProducts ให้แสดงเป็น NO Data
              </li>
              <li>
                เมื่อใดที่กดปุ่ม Add จะเพิ่ม product ที่เลือกไว้ใน
                selectedProducts
              </li>
              <li>คำนวน Sum โดย อัตโนมัติ</li>
            </ol>
          </div>
          <v-img src="problem3.gif"></v-img>
        </v-card>
      </v-window-item>
      <v-window-item value="problem4">
        <v-card flat>
          <div class="ma-16 text-body">
            จงแก้ไข View/SolveProblem4 Component/FirstComponent และ
            Component/SecondComponent ให้สามารถทำได้ตามภาพ (เมื่อทำเสร็จให้
            message ของ commit ด้วย "Fin:Problem4") ประกอบด้วย
            <ol>
              <li>
                ในหน้าหลักให้เพิ่ม Component FirstComponent และ SecondComponent
                ทางซ้ายและขวาตามลำดับ
              </li>
              <li>
                ใส่ปุ่ม Increment (เพิ่มค่า) และ Increment (ลดค่า) ในแถวถัดไป
              </li>
              <li>ค่าเริ่มต้นเริ่มจาก 0 เมื่อใดที่เพิ่มค่าจะเพิ่ม ขึ้น 1</li>
              <li>เมื่อใดที่ลดค่าจะลดทีละ 1 แต่ถ้าถึง 0 จะไม่ลดค่าอีกต่อไป</li>
              <li>แสดงค่าปกติใน First Component</li>
              <li>แสดงค่าที่มีขนาดเป็น 2 เท่า ใน Second Component</li>
            </ol>
          </div>
          <v-img src="problem4.gif"></v-img>
        </v-card>
      </v-window-item>
    </v-window>
  </v-card>
</template>
